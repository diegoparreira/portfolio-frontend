import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { ModernButton } from './index';

interface CRUDListProps<T> {
  title: string;
  queryKey: string[];
  fetchFn: () => Promise<T[]>;
  createFn: (data: Partial<T>) => Promise<unknown>;
  updateFn: (id: string | number, data: Partial<T>) => Promise<unknown>;
  renderItem: (item: T, onEdit: () => void, refetch: () => void) => React.ReactNode;
  ModalComponent: React.ComponentType<{
    show: boolean;
    handleClose: () => void;
    editingObject: T | null;
    handleSubmit: (data: Partial<T>) => void;
  }>;
  getId: (item: T) => string | number;
  singleName: string;
}

function CRUDList<T>({
  title,
  queryKey,
  fetchFn,
  createFn,
  updateFn,
  renderItem,
  ModalComponent,
  getId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  singleName: _singleName,
}: CRUDListProps<T>) {
  const {
    data: items,
    isLoading,
    isError,
    refetch,
    error,
  } = useQuery<T[], Error>({
    queryKey,
    queryFn: fetchFn,
  });
  const [showModal, setShowModal] = useState(false);
  const [editingObject, setEditingObject] = useState<T | null>(null);

  const handleCreate = () => {
    setEditingObject(null);
    setShowModal(true);
  };

  const handleEdit = (item: T) => {
    setEditingObject(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingObject(null);
  };

  const handleSubmit = async (data: Partial<T>) => {
    try {
      if (editingObject) {
        await updateFn(getId(editingObject), data);
      } else {
        await createFn(data);
      }
      handleClose();
      refetch();
    } catch (err) {
      console.error('Error saving:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger">
        Error loading {title.toLowerCase()}. {error?.message}
      </Alert>
    );
  }

  return (
    <div className="admin-content">
      <div className="scroll-area">
        <div className="table-list">
          <ul className="list-group">
            {items &&
              items.map(item => (
                <React.Fragment key={getId(item)}>
                  {renderItem(item, () => handleEdit(item), refetch)}
                </React.Fragment>
              ))}
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <ModernButton onClick={handleCreate} size="lg" icon="plus" />
      </div>

      <ModalComponent
        show={showModal}
        handleClose={handleClose}
        editingObject={editingObject}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CRUDList;
