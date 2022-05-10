import { useDispatch, useSelector } from "react-redux";
import Creatable from "react-select/creatable";
import { capitalize } from "../services/utils";
import { changeCatagory, changePage } from "../store/actions";
import "../../assets/styles/components/Actions.scss";

const options = [
  { value: "cars", label: "Cars" },
  { value: "sports", label: "Sports" },
  { value: "flowers", label: "Flowers" },
  { value: "animals", label: "Animals" },
  { value: "space", label: "Space" },
  { value: "work", label: "Work" },
  { value: "fashion", label: "Fashion" },
];
export const Actions = () => {
  const page = useSelector((state) => state.page);
  const catagory = useSelector((state) => state.catagory);
  const totalImages = useSelector((state) => state.totalImages);
  const dispatch = useDispatch();

  const handleChange = ({ value }) => {
    if (value === catagory) return;
    dispatch(changeCatagory(value));
  };

  return (
    <div className="actions">
      <Creatable
        placeholder={capitalize(catagory)}
        className="select"
        defaultValue={catagory}
        onChange={handleChange}
        options={options}
      />
      <div className="pages">
        <button onClick={() => dispatch(changePage(page - 1))}>Prev</button>
        <span>
          {page} / {Math.ceil(totalImages / 9)}
        </span>
        <button onClick={() => dispatch(changePage(page + 1))}>Next</button>
      </div>
    </div>
  );
};
