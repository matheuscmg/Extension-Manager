import { StyledCard } from "./style";

interface Extension {
  id: number;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}

interface CardProps {
  extension: Extension;
  onDelete: (id: number) => void;
  onToggleActive: (id: number, isActive: boolean) => void;
}

export function Card({ extension, onDelete,onToggleActive }: CardProps) {

  function handleRemoveExtension() {
    onDelete(extension.id)
  }

  return (
    <StyledCard>
      <div className="header">
        <img src={extension.logo} alt={extension.name} />
        <div className="content">
          <strong>{extension.name}</strong>
          <p>{extension.description}</p>
        </div>
      </div>

      <div className="actions">
        <button onClick={handleRemoveExtension}>Remove</button>
        <input type="checkbox" checked={extension.isActive} onChange={() => onToggleActive(extension.id, !extension.isActive)}/>
      </div>
    </StyledCard>
  );
}
