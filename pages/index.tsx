import Title from '../components/title';

const Home: React.FC = (): JSX.Element => (
  <div className="">
    <p className="text-xl text-gray-600 leading-tight">
      Boilerplate built with:
    </p>
    <Title title="Next.js + Typescript + Tailwindcss" />
  </div>
);

export default Home;
