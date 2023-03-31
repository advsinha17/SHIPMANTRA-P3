import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./InputCard.module.css";
const InputCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sourceIsSelected, setSourceIsSelected] = useState(false);
  const [destinationIsSelected, setDestinationIsSelected] = useState(false);
  const [weightIsSelected, setWeightIsSelected] = useState(false);

  const sourceOnFocus = () => {
    setSourceIsSelected(true);
  };
  const destinationOnFocus = () => {
    setDestinationIsSelected(true);
  };
  const weightOnFocus = () => {
    setWeightIsSelected(true);
  };
  const sourceOnBlur = () => {
    setSourceIsSelected(false);
  };
  const destinationOnBlur = () => {
    setDestinationIsSelected(false);
  };
  const weightOnBlur = () => {
    setWeightIsSelected(false);
  };

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={`input-group ${styles.inputGroup}`}>
            <div
              className={
                sourceIsSelected
                  ? `${styles.container} ${styles.selected} rounded-pill`
                  : styles.container
              }
            >
              <div className={styles.content}>
                <label htmlFor="source" className={styles.headings}>
                  Source
                </label>
                <input
                  type="text"
                  id="source"
                  aria-label="Source"
                  {...register("source", { required: true })}
                  className={`form-control ${styles.inputs} shadow-none`}
                  placeholder="Search destinations"
                  onFocus={sourceOnFocus}
                  onBlur={sourceOnBlur}
                />
                {errors?.source?.type === "required" && (
                  <p className={styles.error}>This field is required</p>
                )}
              </div>
            </div>
            <div
              className={
                destinationIsSelected
                  ? `${styles.container} ${styles.selected} rounded-pill`
                  : styles.container
              }
            >
              <div
                className={
                  sourceIsSelected || destinationIsSelected
                    ? styles.content
                    : `${styles.content} ${styles.border}`
                }
              >
                <label htmlFor="destination" className={styles.headings}>
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  aria-label="Destination"
                  {...register("destination", { required: true })}
                  className={`form-control ${styles.inputs} shadow-none`}
                  placeholder="Add Details"
                  onBlur={destinationOnBlur}
                  onFocus={destinationOnFocus}
                />
                {errors?.destination?.type === "required" && (
                  <p className={styles.error}>This field is required</p>
                )}
              </div>
            </div>
            <div
              className={
                weightIsSelected
                  ? `${styles.container} ${styles.selected} rounded-pill`
                  : styles.container
              }
            >
              <div
                className={
                  destinationIsSelected || weightIsSelected
                    ? styles.content
                    : `${styles.content} ${styles.border}`
                }
              >
                <label htmlFor="weight" className={styles.headings}>
                  Weight
                </label>

                <input
                  type="number"
                  id="weight"
                  aria-label="Weight"
                  {...register("weight", { required: true, min: 0 })}
                  className={`form-control ${styles.inputs} shadow-none`}
                  placeholder="Add Details"
                  onBlur={weightOnBlur}
                  onFocus={weightOnFocus}
                  style={{
                    paddingRight: "0px",
                    display: "inline",
                    paddingLeft: "50px",
                    width: "60%",
                  }}
                />
                <span style={{ marginRight: "0px", display: "inline" }}>
                  KG
                </span>
                {(errors?.weight?.type === "required" && (
                  <p className={styles.error}>This field is required</p>
                )) ||
                  (errors?.weight?.type === "min" && (
                    <p className={styles.error}>Weight must be positive.</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="ps-2 pe-4">
            <button
              className={`btn btn-primary ${styles.searchButton} rounded-pill`}
              type="submit"
            >
              <i className={`fa fa-search ${styles.searchIcon}`}></i>Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// {`input-container ps-3`}
export default InputCard;
