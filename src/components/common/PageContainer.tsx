import React from "react";

function PageContainer({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="container-fluid d-flex flex-column" style={{ minHeight: "100vh" }}>
            {children}
        </div>
    );
}

export default PageContainer;