import CRUDList from "./commons/CRUDList";
import CRUDForm from "./commons/CRUDForm";
import Modal from "../commons/Modal";
import FavoriteStar from "./commons/FavoriteStar";
import ProjectMediaCarousel from '../projects/ProjectMediaCarousel';

interface AdminCRUDProps {
    fields: any[];
    fetchItems: () => Promise<any[]>;
    createItem: (data: any) => Promise<any>;
    updateItem: (id: string | number, data: any) => Promise<any>;
    itemKey: string;
    title: string;
    queryKey: string[];
    singleName?: string;
}

const AdminCRUD = ({
    fields,
    fetchItems,
    createItem,
    updateItem,
    itemKey,
    title,
    queryKey,
    singleName
}: AdminCRUDProps) => {

    const getId = (item: any) => item[itemKey];

    const renderItem = (item: any, onEdit: () => void, refetch: () => void) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" onClick={onEdit}>
            <FavoriteStar
                value={(item as any).favorite}
                onToggle={async (newValue) => {
                    // @ts-ignore: favorite is a dynamic field for Project
                    await updateItem(getId(item), { favorite: newValue });
                    refetch(); // Now refetches the list after update
                }}
            />
            <span>{item.name || item.title}</span>
        </li>
    );

    const ModalComponent = ({ show, handleClose, editingObject, handleSubmit }: any) => (
        <Modal show={show} onClose={handleClose} title={editingObject ? `Edit ${singleName}` : `New ${singleName}`}>
            {editingObject && (editingObject.demo_screenshots_urls?.length > 0 || editingObject.demo_video_url) && (
                <div className="text-center mb-3">
                    <ProjectMediaCarousel
                        screenshots={editingObject.demo_screenshots_urls}
                        videoUrl={editingObject.demo_video_url}
                        alt={editingObject.name || editingObject.title}
                    />
                </div>
            )}
            {editingObject && (editingObject.icon_link || editingObject.badge_link) && (
                <div className="text-center mb-3">
                    <img
                        src={editingObject.icon_link || editingObject.badge_link}
                        alt="Preview"
                        style={{ maxWidth: '180px', maxHeight: '180px', borderRadius: '0.5rem', objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                    />
                </div>
            )}
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
            singleName={singleName || title.slice(0, -1)}
        />
    );
};

export default AdminCRUD;
