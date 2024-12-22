import { Tag } from "lucide-react";
import { Badge } from "../ui/badge";

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export const TagFilter = ({ allTags, selectedTags, onTagToggle }: TagFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-foreground">Filtrar por etiquetas:</h3>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={() => onTagToggle(tag)}
          >
            <Tag className="h-3 w-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};