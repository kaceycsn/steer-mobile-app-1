import { Badge, Flex } from "native-base";

interface TagsSectionProps {
  accommodationTags: string[];
}

const tagList: string[] = [
  "Cosy",
  "Budget-friendly",
  "Has wi-fi",
  "Kid-friendly",
  "Rustic",
];

const TagsSection: React.FC<TagsSectionProps> = ({ accommodationTags }) => {
  return (
    <Flex flexWrap="wrap" flexDirection="row" p={4}>
      {accommodationTags.map((tag) => (
        <Badge
          size={"2xl"}
          key={tag}
          mr="4"
          minHeight="8"
          mb="2"
          variant="outline"
          borderColor="#767C77"
          borderRadius="md"
          fontFamily={"Bitter-Medium"}
        >
          {tag}
        </Badge>
      ))}
    </Flex>
  );
};

export default TagsSection;
