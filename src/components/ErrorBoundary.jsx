import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error atrapado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center text-white p-6 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Algo salió mal</h1>
          <p className="text-gray-400 mb-6 max-w-md">
            Experimentamos un error al procesar esta página. 
            <br/><br/>
            Si estás usando Safari en iOS, intenta actualizar la página.
          </p>
          <div className="bg-white/5 border border-red-500/20 p-4 rounded-xl text-left overflow-auto max-w-full mb-6">
            <code className="text-xs text-red-400">
              {this.state.error?.toString()}
            </code>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
          >
            Recargar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
