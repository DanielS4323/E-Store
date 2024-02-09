import { Button } from 'semantic-ui-react';

const PageNotFound = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        width: '200px',
        height: '200px',
      }}
    >
      <p>Page not found.</p>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Go back.
      </Button>
    </div>
  );
};

export default PageNotFound;
