import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Alert, Spinner } from "react-bootstrap";
import type { Skill } from "../../../types/Skill";
import { fetchSkills, createSkill, updateSkill } from "../../../api/skills";
import { ModernButton } from "../commons";
import SkillListItem from "./SkillListItem";
import SkillModal from "./SkillModal";

const SkillsCRUD: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

    const { data: skills, isLoading, isError, refetch, error } = useQuery<Skill[], Error>({
        queryKey: ["skills"],
        queryFn: fetchSkills,
    });

    const handleCreate = () => {
        setEditingSkill(null);
        setShowModal(true);
    };

    const handleEdit = (skill: Skill) => {
        setEditingSkill(skill);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditingSkill(null);
    };

    const handleFavoriteToggle = async (skill: Skill, newValue: boolean): Promise<void> => {
        try {
            // @ts-ignore: favorite is a dynamic field for Certification
            await updateSkill(skill.id, { favorite: newValue });
            refetch();
        } catch (err) {
            console.error("Error updating favorite:", err);
        }
    };

    const handleSubmit = async (data: Partial<Skill>) => {
        try {
            if (editingSkill) {
                await updateSkill(editingSkill.id, data);
            } else {
                await createSkill(data);
            }
            refetch();
            handleClose();
        } catch (err) {
            console.error("Error saving skill:", err);
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
        return <Alert variant="danger">Error: {error?.message}</Alert>;
    }

    return (
        <div className="admin-content">
            <div className="scroll-area">
                <div className="table-list">
                    <ul className="list-group">
                        {skills?.map((skill) => (
                            <SkillListItem
                                key={skill.id}
                                skill={skill}
                                onEdit={() => handleEdit(skill)}
                                onFavoriteToggle={(newValue: boolean) => handleFavoriteToggle(skill, newValue)}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <ModernButton
                    onClick={handleCreate}
                    size="lg"
                    icon="plus"
                />
            </div>


            <SkillModal
                show={showModal}
                skill={editingSkill}
                onClose={handleClose}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default SkillsCRUD;
