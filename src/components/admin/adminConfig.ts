import { fetchProjects, createProject, updateProject } from '../../api/projects';
import { fetchSkills, createSkill, updateSkill } from '../../api/skills';
import {
  fetchCertifications,
  createCertification,
  updateCertification,
} from '../../api/certifications';

export interface AdminSectionConfig {
  key: string;
  label: string;
  config: {
    fields: Array<{
      name: string;
      label: string;
      type: 'text' | 'textarea' | 'date' | 'select';
      required?: boolean;
      placeholder?: string;
      options?: string[];
      minLength?: number;
      maxLength?: number;
      pattern?: string;
    }>;
    fetchItems: () => Promise<Record<string, unknown>[]>;
    createItem: (data: Record<string, unknown>) => Promise<unknown>;
    updateItem: (id: string | number, data: Record<string, unknown>) => Promise<unknown>;
    itemKey: string;
    title: string;
    singleName: string;
    queryKey: string[];
  };
}

export const ADMIN_SECTIONS: AdminSectionConfig[] = [
  {
    key: 'projects',
    label: 'Projects',
    config: {
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Project Name',
          required: true,
          minLength: 2,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          minLength: 10,
          maxLength: 500,
        },
        {
          name: 'tecnical_description',
          type: 'textarea',
          label: 'Technical Description',
          maxLength: 1000,
        },
        {
          name: 'status',
          type: 'select',
          label: 'Status',
          options: ['draft', 'in_progress', 'completed', 'archived'],
          required: true,
        },
        { name: 'start_date', type: 'date', label: 'Start Date' },
        { name: 'end_date', type: 'date', label: 'End Date' },
        {
          name: 'demo_url',
          type: 'text',
          label: 'Demo URL',
          pattern: '^https?://.*',
        },
        {
          name: 'repository_url',
          type: 'text',
          label: 'Repository URL',
          pattern: '^https?://.*',
        },
        {
          name: 'demo_video_url',
          type: 'text',
          label: 'Demo Video URL',
          pattern: '^https?://.*',
        },
        {
          name: 'demo_screenshots_urls',
          type: 'textarea',
          label: 'Demo Screenshot URLs (comma separated)',
        },
      ],
      fetchItems: fetchProjects as unknown as () => Promise<Record<string, unknown>[]>,
      createItem: createProject as unknown as (data: Record<string, unknown>) => Promise<unknown>,
      updateItem: updateProject as unknown as (
        id: string | number,
        data: Record<string, unknown>
      ) => Promise<unknown>,
      itemKey: 'id',
      title: 'Projects',
      singleName: 'Project',
      queryKey: ['projects'],
    },
  },
  {
    key: 'skills',
    label: 'Skills',
    config: {
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Skill Name',
          required: true,
          minLength: 2,
          maxLength: 50,
        },
        {
          name: 'icon_link',
          type: 'text',
          label: 'Icon Link',
          required: true,
          pattern: '^https?://.*\\.(svg|png|jpg|jpeg|gif|webp)$',
        },
      ],
      fetchItems: fetchSkills as unknown as () => Promise<Record<string, unknown>[]>,
      createItem: createSkill as unknown as (data: Record<string, unknown>) => Promise<unknown>,
      updateItem: updateSkill as unknown as (
        id: string | number,
        data: Record<string, unknown>
      ) => Promise<unknown>,
      itemKey: 'id',
      title: 'Skills',
      singleName: 'Skill',
      queryKey: ['skills'],
    },
  },
  {
    key: 'certifications',
    label: 'Certifications',
    config: {
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Certification Name',
          required: true,
          minLength: 3,
          maxLength: 100,
        },
        {
          name: 'badge_link',
          type: 'text',
          label: 'Badge Link',
          required: true,
          placeholder: 'URL to the certification badge',
          pattern: '^https?://.*',
        },
        {
          name: 'certification_link',
          type: 'text',
          label: 'Certification Link',
          required: true,
          placeholder: 'URL to the certification',
          pattern: '^https?://.*',
        },
      ],
      fetchItems: fetchCertifications as unknown as () => Promise<Record<string, unknown>[]>,
      createItem: createCertification as unknown as (
        data: Record<string, unknown>
      ) => Promise<unknown>,
      updateItem: updateCertification as unknown as (
        id: string | number,
        data: Record<string, unknown>
      ) => Promise<unknown>,
      itemKey: 'id',
      title: 'Certifications',
      singleName: 'Certification',
      queryKey: ['certifications'],
    },
  },
];
