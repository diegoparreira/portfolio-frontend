import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";

interface CRUDListProps<T> {
    title: string;
    queryKey: string[];
    fetchFn: () => Promise<T[]>;
    createFn: (data: Partial<T>) => Promise<any>;
    updateFn: (id: string | number, data: Partial<T>) => Promise<any>;
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
    singleName
}: CRUDListProps<T>) {
    const { data: items, isLoading, isError, refetch, error } = useQuery<T[], Error>({
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
        if (editingObject) {
            await updateFn(getId(editingObject), data);
        } else {
            await createFn(data);
        }
        handleClose();
        refetch();
    };

    return (
        <div>
            {isLoading && <Spinner animation="grow" />}
            {isError && <Alert variant="danger" className="text-center py-5">Error loading {title.toLowerCase()}. {error?.message}</Alert>}
            <ul className="list-group scroll-area">
                {items && items.map(item => (
                    <React.Fragment key={getId(item)}>
                        {renderItem(item, () => handleEdit(item), refetch)}
                    </React.Fragment>
                ))}
            </ul>
            <div className="d-flex justify-content-center">
                <Button variant="primary" size="sm" className="main-button mt-3" onClick={handleCreate}>
                    New {singleName}
                </Button>
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