import CRUDList from "./commons/CRUDList";
import CRUDForm from "./commons/CRUDForm";
import Modal from "../common/Modal";

interface AdminCRUDProps {
    fields: any[];
    fetchItems: () => Promise<any[]>;
    createItem: (data: any) => Promise<any>;
    updateItem: (id: string | number, data: any) => Promise<any>;
    deleteItem: (id: string | number) => Promise<any>;
    itemKey: string;
    title: string;
    queryKey: string[];
}

const AdminCRUD = ({
    fields,
    fetchItems,
    createItem,
    updateItem,
    itemKey,
    title,
    queryKey
}: AdminCRUDProps) => {

    const getId = (item: any) => item[itemKey];

    const renderItem = (item: any, onEdit: () => void) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" onClick={onEdit}>
            <span>{getId(item)}</span>
            <span>{item.name || item.title}</span>
        </li>
    );

    const ModalComponent = ({ show, handleClose, editingObject, handleSubmit }: any) => (
        <Modal show={show} onClose={handleClose} title={editingObject ? `Edit ${title}` : `New ${title.slice(0, -1)}`}>
            <CRUDForm
                fields={fields}
                initialData={editingObject || {}}
                onSubmit={handleSubmit}
                onCancel={handleClose}
            />
        </Modal>
    );

    return (
        <CRUDList
            title={title}
            queryKey={queryKey}
            fetchFn={fetchItems}
            createFn={createItem}
            updateFn={updateItem}
            renderItem={renderItem}
            ModalComponent={ModalComponent}
            getId={getId}
        />
    );
};

export default AdminCRUD;
