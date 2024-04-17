import React, { useEffect, useState } from "react";
import "./OrderPizzaOptions.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const malzemeler = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Sucuk(Acı)",
  "Ananas",
  "Tavuk Izgara",
  "Jalapeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

const initialValues = {
  boyut: "",
  hamur: "",
  malzeme: [],
  not: "",
  adet: 1,
};

const initialErrors = {
  malzeme: true,
  boyut: false,
  hamur: false,
};

export default function OrderPizzaOptions({ dataFn }) {
  const history = useHistory();
  const [formData, setFormData] = useState(initialValues);
  const [adet, setAdet] = useState(1);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(false);

  function handleCountChange(event) {
    event.preventDefault();
    const { name } = event.target;

    if (name === "ekle-btn") {
      setAdet(adet + 1);
      setFormData({ ...formData, adet: adet + 1 });
    } else {
      if (adet > 1) {
        setAdet(adet - 1);
        setFormData({ ...formData, adet: adet + 1 });
      }
    }
  }

  useEffect(() => {
    if (!errors.malzeme && errors.hamur && errors.boyut) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [formData]);

  const handleChange = (event) => {
    let { name, value, checked } = event.target;

    if (name === "boyut") {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: true });
    }

    if (name === "hamur") {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: true });
    }

    if (name === "malzeme") {
      const newFormData = formData;
      if (checked) {
        newFormData.malzeme.push(value);
      } else {
        const index = newFormData.malzeme.indexOf(value);
        newFormData.malzeme.splice(index, 1);
      }

      setFormData({ ...newFormData });
      if (newFormData.malzeme.length < 4 || newFormData.malzeme.length > 10) {
        setErrors({ ...errors, [name]: true });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    }

    if (name === "not") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log(response.data);
        history.push("/success");
        dataFn(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toplam = 5 * formData.malzeme.length * adet + 85.5 * adet;
  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <section className="pizza-boyut-section">
        <div className="pizza-size">
          <h4>
            Boyut Seç<span className="red"> *</span>
          </h4>
          <div className="boyut">
            <label>
              <input
                type="radio"
                name="boyut"
                icon="S"
                value="Küçük"
                id="boyut"
                onChange={handleChange}
              />{" "}
            </label>
            <label>
              <input
                type="radio"
                name="boyut"
                icon="M"
                value="Orta"
                id="boyut"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="radio"
                name="boyut"
                icon="L"
                value="Büyük"
                id="boyut"
                onChange={handleChange}
              />
            </label>
          </div>
          {!errors.boyut && <p className="red">Lütfen seçim yapınız.</p>}
        </div>
        <div className="pizza-hamur">
          <h4>
            Hamur Seç<span className="red"> *</span>
          </h4>

          <select name="hamur" value={formData.hamur} onChange={handleChange}>
            <option hidden defaultValue>
              -- Hamur Kalınlığı Seç --
            </option>
            <option value="İnce">İnce</option>
            <option value="Normal">Normal</option>
            <option value="Kalın">Kalın</option>
          </select>
          {
            <p className="red" hidden={errors.hamur}>
              Lütfen seçim yapınız.
            </p>
          }
        </div>
      </section>
      <section className="pizza-ek-malzemeler">
        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

        <div className="pizza-malzemeler">
          {malzemeler.map((malzeme) => {
            return (
              <div
                key={malzeme}
                className="pizza-malzeme"
                id="malzemeler-checkbox"
              >
                <label>
                  <input
                    type="checkbox"
                    name="malzeme"
                    data-checkbox-cy="checkbox-cy"
                    value={malzeme}
                    onClick={handleChange}
                  />{" "}
                  {malzeme}
                </label>
              </div>
            );
          })}
        </div>
        {errors.malzeme && (
          <p className="red">En az 4, en fazla 10 malzeme seçebilirsin.</p>
        )}
        <br></br>
      </section>

      <section className="pizza-siparis-notu">
        <h3>Sipariş Notu</h3>
        <input
          type="textarea"
          name="not"
          data-cy="not-cy"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={handleChange}
        />
      </section>
      <hr></hr>
      <section className="pizza-siparis-section">
        <div className="pizza-adet">
          <button name="cikar-btn" onClick={handleCountChange}>
            -
          </button>
          <p>{adet}</p>
          <button name="ekle-btn" onClick={handleCountChange}>
            +
          </button>
        </div>
        <div className="pizza-fiyat">
          <h3>Sipariş Toplamı</h3>
          <div className="fiyat-section">
            <div className="secim-section">
              <p>Seçimler</p>
              <p>{formData.malzeme.length * 5 * adet}.00₺</p>
            </div>
            <div className="secim-section red">
              <p>Toplam</p>
              <p>{toplam}₺</p>
            </div>
          </div>
          <button
            type="submit"
            className="pizza-confirm-button"
            id="confirm-button"
            disabled={!isValid}
          >
            SİPARİŞ VER
          </button>
        </div>
      </section>
    </form>
  );
}
