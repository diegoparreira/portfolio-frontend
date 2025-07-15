import { CRUDList, FavoriteStar, GenericForm, type GenericFormFieldConfig } from './commons';
import Modal from '../commons/Modal';
import ProjectMediaCarousel from '../home/projects/ProjectMediaCarousel';

interface AdminCRUDProps {
  fields: GenericFormFieldConfig[];
  fetchItems: () => Promise<Record<string, unknown>[]>;
  createItem: (data: Record<string, unknown>) => Promise<unknown>;
  updateItem: (id: string | number, data: Record<string, unknown>) => Promise<unknown>;
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
  singleName,
}: AdminCRUDProps) => {
  const getId = (item: Record<string, unknown>): string | number =>
    item[itemKey] as string | number;

  const renderItem = (
    item: Record<string, unknown>,
    onEdit: () => void,
    refetch: () => void
  ): React.ReactNode => (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={onEdit}
    >
      <FavoriteStar
        value={Boolean(item.favorite)}
        onToggle={async newValue => {
          await updateItem(getId(item), { favorite: newValue });
          refetch();
        }}
      />
      <span>{String(item.name || item.title)}</span>
    </li>
  );
  const ModalComponent = ({
    show,
    handleClose,
    editingObject,
    handleSubmit,
  }: {
    show: boolean;
    handleClose: () => void;
    editingObject: Record<string, unknown> | null;
    handleSubmit: (data: Record<string, unknown>) => void;
  }): React.ReactElement => (
    <Modal
      show={show}
      onClose={handleClose}
      title={editingObject ? `Edit ${singleName}` : `New ${singleName}`}
    >
      {editingObject &&
      ((editingObject.demo_screenshots_urls as string[])?.length > 0 ||
        editingObject.demo_video_url) ? (
        <div className="text-center mb-3">
          <ProjectMediaCarousel
            screenshots={editingObject.demo_screenshots_urls as string[]}
            videoUrl={editingObject.demo_video_url as string}
            alt={String(editingObject.name || editingObject.title)}
          />
        </div>
      ) : null}
      {editingObject && (editingObject.icon_link || editingObject.badge_link) ? (
        <div className="text-center mb-3">
          <img
            src={String(editingObject.icon_link || editingObject.badge_link)}
            alt="Preview"
            style={{
              maxWidth: '180px',
              maxHeight: '180px',
              borderRadius: '0.5rem',
              objectFit: 'cover',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          />
        </div>
      ) : null}
      <GenericForm
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
