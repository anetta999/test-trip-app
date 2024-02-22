import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  Backdrop,
  CancelBtn,
  FormBtn,
  FormOption,
  Modal,
  ModalHeader,
  StyledErrorMsg,
  StyledForm,
} from "./CreateTripModal.styled";
import { Field, Formik } from "formik";
import { formatTripDate } from "../../utils/formatDate";
import * as Yup from "yup";

const cities = [
  "New York",
  "Barcelona",
  "London",
  "Paris",
  "Singapur",
  "Vienna",
  "Prague",
  "Rome",
  "Stockholm",
];

const modalRoot = document.querySelector("#modal-root");

const tripSchema = Yup.object().shape({
  city: Yup.string().required("Required"),
  startDate: Yup.string().required("Required"),
  endDate: Yup.string().required("Required"),
});

export const CreateTripModal = ({ isModalOpen, onClose, addTrip }) => {
  useEffect(() => {
    const handleModalCloseByEsc = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleModalCloseByEsc);

    if (isModalOpen || modalRoot.children.length) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleModalCloseByEsc);
    };
  }, [onClose, isModalOpen]);

  const handleModalCloseByClickOnBackdrop = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <>
      <Backdrop onClick={handleModalCloseByClickOnBackdrop}>
        <Modal>
          <ModalHeader>
            <h2>Create trip</h2>
            <button type="button" onClick={onClose}>
              <AiOutlineClose />
            </button>
          </ModalHeader>
          <Formik
            initialValues={{
              city: "",
              startDate: "",
              endDate: "",
            }}
            validationSchema={tripSchema}
            onSubmit={(values, actions) => {
              addTrip({
                ...values,
                startDate: formatTripDate(values.startDate),
                endDate: formatTripDate(values.endDate),
              });
              actions.resetForm();
              onClose();
            }}
          >
            <StyledForm>
              <label>
                City
                <Field
                  name="city"
                  list="cities"
                  type="text"
                  placeholder="Please select a city"
                />
                <StyledErrorMsg name="city" component="p" />
                <datalist id="cities">
                  <FormOption value="" />
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </datalist>
              </label>
              <label>
                Start date
                <Field
                  type="date"
                  name="startDate"
                  placeholder="Please select a date"
                />
                <StyledErrorMsg name="startDate" component="p" />
              </label>
              <label>
                End date
                <Field
                  type="date"
                  name="endDate"
                  placeholder="Please select a date"
                />
                <StyledErrorMsg name="endDate" component="p" />
              </label>
              <ul>
                <li>
                  <CancelBtn type="button" onClick={onClose}>
                    Cancel
                  </CancelBtn>
                </li>
                <li>
                  <FormBtn type="submit">Save</FormBtn>
                </li>
              </ul>
            </StyledForm>
          </Formik>
        </Modal>
      </Backdrop>
    </>,
    modalRoot
  );
};
