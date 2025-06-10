interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="table-header">
            <h3>{props.title}</h3>
        </header>
    )
}

export default Header;