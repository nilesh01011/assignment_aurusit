import React, { useEffect, useState } from 'react';
import Label from '../label/Label';
import './styles.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineUpload } from 'react-icons/hi';
import Button from '../button/Button';

function UploadEventFileItems({
  label,
  subtext,
  uploadFile,
  onFileChange,
  formId,
  error,
}) {
  const handleUploadFiles = (e) => {
    const selectedFile = e.target.files[0].name;
    onFileChange(selectedFile);
  };
  return (
    <div className="uploadFileContainer">
      {/* label */}
      <Label label={label} />
      {/* form */}
      <div
        className="form"
        onClick={() => document.querySelector(`#${formId}`).click()}
        style={{ borderColor: uploadFile === "" && error !== '' ? '#ED302D' : '#888888' }}
      >
        {/* icons */}
        <span>
          {uploadFile ? (
            <FaCheckCircle size={24} style={{ color: '#56AC18' }} />
          ) : (
            <HiOutlineUpload size={24} />
          )}
        </span>
        {/* subtext */}
        <span
          className="subText"
          style={{ color: uploadFile ? '#56AC18' : '#888888' }}
        >
          {uploadFile ? 'Uploaded successful' : subtext}
        </span>
        {/* button */}
        <Button
          btnType="button"
          btnText={uploadFile ? 'Change file' : 'select file'}
          btnSize="smallBtn"
        />
        {/* file input */}
        <input type="file" id={formId} onChange={handleUploadFiles} hidden />

        {/* uploaded files */}
        {uploadFile && <span className="uploadFilesName">{uploadFile}</span>}
      </div>

      {/* errors */}
      {uploadFile === "" && error !== '' && <span className="error">{error}</span>}
    </div>
  );
}

export default UploadEventFileItems;
