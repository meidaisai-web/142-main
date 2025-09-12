import { List, ListItem } from "./List"
import Text from "./Text"

interface RuleItemProps {
    title: string
    content: string
}

const RuleItem = ({ title, content }: RuleItemProps) => {
    return (
        <List mark="・">
            <div className="m-10" />
            <ListItem>
                {title}
            </ListItem>
            <List>
                <Text>
                    {content}
                </Text>
            </List>
        </List>
    )
}

export default RuleItem