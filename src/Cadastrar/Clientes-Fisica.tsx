import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Clientes.css";
import "../Cadastrar.css";

function ClientesFisica() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form className="form-container">
        <div className="form-content">
          <div className="form-fields">
            <div className="field-group">
              <label>
                Nome:
                <input type="text" name="name" />
              </label>

              <label>
                Número:
                <input type="text" name="number" />
              </label>
            </div>

            <div className="field-group">
              <label>
                Categorias:
                <select name="category">
                  <option value="">Selecione uma categoria</option>
                  <option value="categoria1">Categoria 1</option>
                  <option value="categoria2">Categoria 2</option>
                </select>
              </label>

              <label>
                Data de Nasc.:
                <input type="date" name="birthDate" />
              </label>

              <label>
                Gênero:
                <select name="gender">
                  <option value="">Selecione um gênero</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </label>
            </div>

            <div className="field-group">
              <label>
                CPF:
                <input type="text" name="cpf" />
              </label>

              <label>
                Celular:
                <input type="tel" name="cellphone" />
              </label>
            </div>

            <div className="field-group">
              <label>
                Email:
                <input type="email" name="email" />
              </label>

              <label>
                Site:
                <input type="url" name="website" />
              </label>
            </div>

            <div className="field-group full-width">
              <label className="observations-label">
                Observações:
                <textarea name="observations" />
              </label>
            </div>
          </div>

          {/* Área de upload de foto */}
          <div
            className="photo-section"
            onClick={() => document.getElementById("photo-input")?.click()}
          >
            <input
              type="file"
              id="photo-input"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handlePhotoChange}
            />
            <div className="photo-preview">
              {photoPreview ? (
                <img src={photoPreview} alt="Pré-visualização da foto" />
              ) : (
                <span>Clique para adicionar uma foto</span>
              )}
            </div>
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ClientesFisica;
