import Container from './Container';

export default function Header() {
  return (
    <header className="sm: flex sm: justify-between py-3 px-4 font-supreme border-b border-gray-600">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-10 items-center justify-center w-full">
          <div className="flex items-center">
            {/* need to add Link element when Router is setup*/}
            <h1 className="text-xl font-bold">Popi Mundial</h1>
          </div>
        </div>
      </Container>
    </header>
  );
}
