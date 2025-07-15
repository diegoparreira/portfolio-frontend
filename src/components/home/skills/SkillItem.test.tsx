import { render, screen } from '@testing-library/react';
import SkillItem from './SkillItem';

const mockSkill = {
  id: 1,
  name: 'React',
  icon_link: 'https://example.com/react-icon.svg',
  favorite: false,
};

describe('SkillItem', () => {
  it('renders skill name', () => {
    render(<SkillItem icon={mockSkill.icon_link} label={mockSkill.name} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders skill icon', () => {
    render(<SkillItem icon={mockSkill.icon_link} label={mockSkill.name} />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('src', 'https://example.com/react-icon.svg');
  });
});
