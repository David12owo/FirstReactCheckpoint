import PropTypes from "prop-types";
import { Card } from "antd";
const { Meta } = Card;

function Item(props) {
  return (
    <Card hoverable cover={<img alt="example" src={props.image} />}>
      <Meta
        title={props.name}
        description={
          <div>
            <h1>{props.price}</h1>
            <p>{props.description}</p>
          </div>
        }
      />
    </Card>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

Item.defaultProps = {
  price: 450000,
};

export default Item;
