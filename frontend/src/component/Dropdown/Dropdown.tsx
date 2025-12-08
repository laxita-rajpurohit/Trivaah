import { Link } from "react-router-dom";
import { Wrapper, Column, Heading, Item } from "./Dropdown.styled";
import { getCategoryPath } from "../../utils/routing";

export default function MegaDropdown({
  columns,
  visible = false,
  x,
}: {
  columns: { heading: string; items: string[] }[] | null;
  visible?: boolean;
  x?: number;
}) {
  if (!columns) return null;

  return (
    <Wrapper visible={visible} x={x}>
      <div className="content-box">
        {columns.map((col) => (
          <Column key={col.heading}>
            <Heading>{col.heading}</Heading>
            {col.items.map((name) => (
              <Item key={name} as={Link} to={getCategoryPath(name)}>
                {name}
              </Item>
            ))}
          </Column>
        ))}
      </div>
    </Wrapper>
  );
}
