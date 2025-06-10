import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import Header from "./Header";

interface CRUDListProps<T> {
    title: string;
    queryKey: string[];
    fetchFn: () => Promise<T[]>;
    createFn: (data: Partial<T>) => Promise<any>;
    updateFn: (id: string | number, data: Partial<T>) => Promise<any>;
    renderItem: (item: T, onEdit: () => void) => React.ReactNode;
    ModalComponent: React.ComponentType<{
        show: boolean;
        handleClose: () => void;
        editingObject: T | null;
        handleSubmit: (data: Partial<T>) => void;
    }>;
    getId: (item: T) => string | number;
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
}: CRUDListProps<T>) {
    const { data: items, isLoading, isError, refetch } = useQuery<T[], Error>({
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
            <Header title={title} />
            {isLoading && <Spinner animation="grow" />}
            {isError && <div className="text-danger">Error loading {title.toLowerCase()}.</div>}
            <ul className="list-group scroll-area">
                {items && items.map(item => (
                    <React.Fragment key={getId(item)}>
                        {renderItem(item, () => handleEdit(item))}
                    </React.Fragment>
                ))}
            </ul>
            <Button variant="primary" size="sm" className="main-button mt-3" onClick={handleCreate}>
                New {title.slice(0, -1)}
            </Button>
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