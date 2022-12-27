
interface DotProps {
  color: string;
  size: number;
}

const Dot: React.FC<Partial<DotProps>> = ({ color = "#292929", size = 1 }) => {
  return <div style={{
    content: "",
    backgroundColor: color,
    width: size,
    height: size,
    display: "block",
    margin: 6
  }}></div>
};

export default Dot;