const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#0b0f1a_0%,#111827_80%)]">
            {children}
        </div>
    );
}

export default AuthLayout;