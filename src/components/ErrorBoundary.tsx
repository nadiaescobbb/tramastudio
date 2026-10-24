import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center text-foreground">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Algo salió mal
          </p>
          <h2 className="text-2xl font-semibold">No se pudo cargar esta sección.</h2>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-full border border-black/10 bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
