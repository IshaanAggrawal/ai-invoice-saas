export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mesh p-4">
      <div className="max-w-md w-full text-center card p-8">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        
        <div className="mt-8">
          <a 
            href="/"
            className="btn-primary inline-block"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}