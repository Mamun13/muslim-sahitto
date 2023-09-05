import React from "react";
import { MdPreview } from "react-icons/md";
// import PDF from '../../public/img/pdf_page/Present_Committee.pdf'

const Otherinformation = () => {
  

  const onButtonClick = () => {
		fetch('../Present_Committee.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../Present_Committee.pdf';
        window.open('../Present_Committee.pdf');
				alink.click();
			})
		})
	}
  const onButtonClickOne = () => {
		fetch('../img/pdf_page/All_Committee_2007-2023.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../img/pdf_page/All_Committee_2007-2023.pdf';
        window.open('../img/pdf_page/All_Committee_2007-2023.pdf');
				alink.click();
			})
		})
	}
  const onButtonClickTwo = () => {
		fetch('../img/pdf_page/Committee_1936-2006.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../img/pdf_page/Committee_1936-2006.pdf';
        window.open('../img/pdf_page/Committee_1936-2006.pdf');
				alink.click();
			})
		})
	}

  const onButtonClickThree = () => {
		fetch('../img/pdf_page/Library_Report.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../img/pdf_page/Library_Report.pdf';
        window.open('../img/pdf_page/Library_Report.pdf');
				alink.click();
			})
		})
	}
  const onButtonClickFour = () => {
		fetch('../img/pdf_page/Yearly_Program_List.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../img/pdf_page/Yearly_Program_List.pdf';
        window.open('../img/pdf_page/Yearly_Program_List.pdf');
				alink.click();
			})
		})
	}
 
  const onButtonClickFive = () => {
		fetch('../img/pdf_page/Book_&_News_Paper.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = '../img/pdf_page/Book_&_News_Paper.pdf';
        window.open('../img/pdf_page/Book_&_News_Paper.pdf');
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
                <button onClick={onButtonClickOne} target="_blank" className="downloadpdf pdf-btn-color rounded-1">
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
                <button onClick={onButtonClickTwo} className="downloadpdf pdf-btn-color rounded-1">
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
                <button onClick={onButtonClickThree}  className="downloadpdf pdf-btn-color rounded-1">
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
                <button onClick={onButtonClickFour} className="downloadpdf pdf-btn-color rounded-1">
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
                <button onClick={onButtonClickFive}  className="downloadpdf pdf-btn-color rounded-1">
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
