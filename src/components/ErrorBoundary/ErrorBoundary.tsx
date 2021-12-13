import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: false };
    }
    public componentDidCatch(error: Error) {
        console.error('Error en la aplicacion', error)
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Error en la aplicacion, por favor intete mas tarde..</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;