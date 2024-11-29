const EmptyState = () => {
    return (
      <div className="w-full h-[100vh] px-4 py-10 sm:px-6 lg:px-8 flex justify-center items-center bg-gray-900">
        <div className="text-center items-center flex flex-col h-full">
          <h3 className="mt-2 text-xl font-semibold text-gray-100">
            Select a chat or start a new conversation
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Your conversations will appear here.
          </p>
        </div>
      </div>
    );
  };
  
  export default EmptyState;
  