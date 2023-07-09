import React from "react";
import { MdPreview } from "react-icons/md";
// import PDF from '../../public/img/pdf_page/Present_Committee.pdf'

const Otherinformation = () => {
  const Present_Committee = () => {
    const fileUrl = "http://localhost:3000/img/Article/Present_Committee.pdf";
    const fileName = "Present_Committee_List.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  };

  const Committee_member_2007 = () => {
    const fileUrl =
      "http://localhost:3000/img/Article/All_Committee_2007-2023.pdf";
    const fileName = "All_Committee_2007-2023.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  };
  const Committee_member_1936 = () => {
    const fileUrl = "http://localhost:3000/img/Article/Committee_1936-2006.pdf";
    const fileName = "All_Committee_1936.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  };
  const Library_Report = () => {
    const fileUrl = "http://localhost:3000/img/Article/Library_Report.pdf";
    const fileName = "Library_Report.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  };

  const Yearly_Program_List = () => {
    const fileUrl = "http://localhost:3000/img/Article/Yearly_Program_List.pdf";
    const fileName = "Yearly_Program_List.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  };
  const Book_Newspaper_List = () => {
    const fileUrl = "http://localhost:3000/img/Article/Book_&_News_Paper.pdf";
    const fileName = "Book_Newspaper_List.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  };
  const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('../Present_Committee.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../Present_Committee.pdf';
				alink.click();
			})
		})
	}

  return (
    <div className="container">
      <div className="settingItem">
        <div className="row">
          <div className="card-body">
            <div className="item rounded mb-4 p-3 d-flex justify-content-between">
              <div className="col-md-8">
                <p className="mb-0 font-16 text-muted">
                  {" "}
                  বর্তমান কমিটির তালিকা{" "}
                </p>
              </div>
              <div className="col-md-4 floaddis">
                
                <button onClick={onButtonClick} className="downloadpdf pdf-btn-color rounded-1">
                  <MdPreview className="grview font-20 mx-1 my-1" />
								</button>
              </div>
            </div>

            <div className="item rounded mb-4 p-3 d-flex justify-content-between">
              <div className="col-md-8">
                <p className="mb-0 font-16 text-muted">
                  {" "}
                  কমিটির সদস্য ২০০৭-২০২৩{" "}
                </p>
              </div>
              <div className="col-md-4 floaddis">
                <button onClick={onButtonClick} target="_blank" className="downloadpdf pdf-btn-color rounded-1">
                  <MdPreview className="grview font-20 mx-1 my-1" />
								</button>
              </div>
            </div>
            <div className="item rounded mb-4 p-3 d-flex justify-content-between">
              <div className="col-md-8">
                <p className="mb-0 font-16 text-muted">
                  {" "}
                  কমিটির সদস্য ১৯৩৬-২০০৬{" "}
                </p>
              </div>
              <div className="col-md-4 floaddis">
                <button onClick={onButtonClick} className="downloadpdf pdf-btn-color rounded-1">
                  <MdPreview className="grview font-20 mx-1 my-1" />
								</button>
              </div>
            </div>
            <div className="item rounded mb-4 p-3 d-flex justify-content-between">
              <div className="col-md-8">
                <p className="mb-0 font-16 text-muted">
                  {" "}
                  মাসিক গ্রন্থাগার রিপোর্ট{" "}
                </p>
              </div>
              <div className="col-md-4 floaddis">
                <button onClick={onButtonClick} className="downloadpdf pdf-btn-color rounded-1">
                  <MdPreview className="grview font-20 mx-1 my-1" />
								</button>
              </div>
            </div>
            <div className="item rounded mb-4 p-3 d-flex justify-content-between">
              <div className="col-md-8">
                <p className="mb-0 font-16 text-muted">
                  {" "}
                  বার্ষিক অনুষ্ঠানের তালিকা{" "}
                </p>
              </div>
              <div className="col-md-4 floaddis">
                <button onClick={onButtonClick} className="downloadpdf pdf-btn-color rounded-1">
                  <MdPreview className="grview font-20 mx-1 my-1" />
								</button>
              </div>
            </div>
            <div className="item rounded mb-4 p-3 d-flex justify-content-between">
              <div className="col-md-8">
                <p className="mb-0 font-16 text-muted">
                  {" "}
                  বই এবং সংবাদপত্রের তালিকা{" "}
                </p>
              </div>
              <div className="col-md-4 floaddis">
                <button onClick={onButtonClick} className="downloadpdf pdf-btn-color rounded-1">
                  <MdPreview className="grview font-20 mx-1 my-1" />
								</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Otherinformation;
