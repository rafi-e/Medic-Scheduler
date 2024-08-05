import { useEffect, useState } from "react";
import CategoryList from "../components/search/CategoryList";
import { useParams } from "react-router-dom";
import { categoryList } from "../data/data";
import DoctorList from "../components/doctors/DoctorList";
import { doctorlists } from "./../data/data";

export default function Search() {
  const { categoriesName } = useParams();
  const [showCategoryList, setShowCategoryList] = useState(false);
  const categories = categoryList.find(
    (category) => category.name.toLowerCase() === categoriesName.toLowerCase()
  );

  const filteredDoctors = doctorlists.filter((doctor) => {
    return doctor.categories.some(
      (category) => category.name.toLowerCase() === categoriesName
    );
  });

  if (!categories) {
    return <div>Categories not Found</div>;
  }
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="block">
          <CategoryList
            showCategoryList={showCategoryList}
            setShowCategoryList={setShowCategoryList}
          />
        </div>
        <div className="mt-4 col-span-5 lg:col-span-4">
          <DoctorList
            heading={categoriesName + " " + "Doctors"}
            doctorlists={filteredDoctors}
          />
        </div>
      </div>
    </>
  );
}
