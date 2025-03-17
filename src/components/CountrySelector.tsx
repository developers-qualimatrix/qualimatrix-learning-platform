// @ts-nocheck

"use client";
import React, { useMemo } from "react";
import countryList from "react-select-country-list";
import { LinearBorder } from "./ui/LinearBorder";

function CountrySelector({ formik, name }: { formik: any; name: string }) {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="custom-dropdown w-100 mb-3 mb-sm-5">
      <LinearBorder>
        <select
          className="form-control"
          name={name}
          value={formik.values[name] || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        >
          <option value="" hidden>
            Select Your Country*
          </option>
          {options.map((country: any) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </LinearBorder>

      {/* Validation Error Message */}
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-start text-danger fs-12 m-0 p-0 ps-2">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
}

export default CountrySelector;
