import { useRouteError } from 'react-router-dom';
import { Button } from './components/ui/button';

import Image404 from '@/assets/illustrations/404.svg';

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="h-[100vh] flex flex-col w-[100vw] justify-center text-center items-center">
      <img src={Image404} alt="404" className="w-[20rem] mb-8" />
      <h1 className="text-5xl mb-8">Oops!</h1>
      <p className="mb-4">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button asChild className="mt-8 w-[20rem]" variant="default">
        <a href="/">Go back to the home page</a>
      </Button>
    </div>
  );
}
