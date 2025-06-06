import React from "react";

function PageContainer({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="container-fluid">
            {children}
        </div>
    );
}

export default PageContainer;