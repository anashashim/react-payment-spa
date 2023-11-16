import { useMemo, useState } from "react";
import Modal from "./Modal";
import Popup from "./Popup";
import { isNumber, isEmail, handleResponse } from "../utils";
import { transferPayment } from "../services/api-service";

const PaymentForm = () => {
  const currency = ["USD", "INR"];
  const initData = {
    to: "",
    from: "USD",
    amount: 0,
    description: ""
  };
  const [formData, setFormData] = useState(initData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popup, setPopup] = useState(null);
  const [error, setError] = useState("");

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const disableBtn = useMemo(() => {
    return !formData.to || !formData.amount;
  }, [formData]);

  const validateForm = () => {
    return isNumber(formData.amount) && isEmail(formData.to);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const res = await transferPayment(formData);
      setFormData(initData); // resetting form
      closeModal(); // closing Modal
      const handledResponse = handleResponse(res);
      if (handledResponse) setPopup(handledResponse);
    } else {
      setError("To address or Amount is not valid");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <div>
      <button className="tranfer-btn" onClick={openModal}>
        Make a Tranfer
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3>Transfer Form</h3>
        <form onSubmit={submitForm}>
          <div className="form-controls">
            <label>To </label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={updateFormData}
            />
          </div>
          <div className="form-controls">
            <label>From </label>
            <select name="from" value={formData.from} onChange={updateFormData}>
              {currency.map((val) => {
                return <option value={val}>{val}</option>;
              })}
            </select>
          </div>
          <div className="form-controls">
            <label>Amount </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={updateFormData}
            />
          </div>
          <div className="form-controls">
            <label>Description </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={updateFormData}
            />
          </div>
          <button type="submit" className="submit-btn" disabled={disableBtn}>
            Submit
          </button>
          {error && <p className="error-msg">{error}</p>}
        </form>
      </Modal>

      {popup && (
        <Popup type={popup.type} message={popup.message} onClose={closePopup} />
      )}
    </div>
  );
};

export default PaymentForm;
