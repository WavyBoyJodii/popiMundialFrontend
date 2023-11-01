import Container from './Container';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sm: flex sm: justify-between py-3 px-4 font-supreme sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-10 items-center justify-between w-full">
          <div className="flex items-center">
            {/* need to add Link element when Router is setup*/}
            <h1 className="text-xl font-bold">Popi Mundial</h1>
          </div>
          <nav className="mx-6 flex items-center justify-items-center space-x-4 lg:space-x-6 hidden md:block">
            {/* <Link to="/"> */}
            <Button variant="ghost">Dembow</Button>
            {/* </Link> */}
            {/* <Link to="shop"> */}
            <Button variant="ghost">Trap</Button>
            {/* </Link> */}
            {/* <Link to="shop"> */}
            <Button variant="ghost">Reggaeton</Button>
            {/* </Link> */}
          </nav>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 md:hidden" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {/* <Link className="block px-2 py-1 text-lg" to="/">
                  Home
                </Link>
                <Link className="block px-2 py-1 text-lg" to="shop">
                  Shop
                </Link> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
