interface Props {
  title: string;
}

const Title = ({ title }: Props) => (
  <h1 className="text-5xl font-bold">{title}</h1>
);

export default Title;
