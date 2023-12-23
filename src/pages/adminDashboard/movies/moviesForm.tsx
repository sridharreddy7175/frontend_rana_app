import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTextBox from "../../../components/inputTextBox";
import LabelBox from "../../../components/label";
import { AdminService } from "../../../app/service/admin.service";
import { toast } from "react-toastify";

export const MoviesForm = () => {
  const [title, setTitle] = useState("");
  const [storyLine, setStoryLine] = useState("");
  const [director, setDirector] = useState("");
  const [type, setType] = useState("");
  const [releseDate,setReleseDate]=useState('');
  const [tags, setTags] = useState<any>([]);
  const [genres, setGenres] = useState<any>([]);
  const [cast, setCast] = useState<any>([]);
  const [trailer,setTrailer]=useState('');
  const [poster,setPoster]=useState<any>('');
  const [video,setVideo]=useState('');
  const [imbRating,setImbRating]=useState('');
  const [language,setLanguage]=useState<any>([]);
  const [loading,setLoading]=useState(false);

  const handlePoster = (e:any) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPoster(file);
    };

    reader.readAsDataURL(file);
  };
  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate("/dashboard/movies");
  };

  const handleMovies = (e: any) => {
    e.preventDefault();
    console.log("psiiiii",poster.name)
    const formData = new FormData();
    let GenresSet: any = genres
    .toString()
    .split(",")
    .map((genre: string) => genre.trim());
  let TagsSet: any = tags
    .toString()
    .split(",")
    .map((tag: string) => tag.trim());
  let LanuageSet: any = language
    .toString()
    .split(",")
    .map((language: string) => language.trim());
  let CastSet: any = cast
    .toString()
    .split(",")
    .map((cast: string) => cast.trim());
      formData.append("poster", poster);
      formData.append("type", type);
      formData.append("title", title);
      formData.append("storyLine", storyLine);
      formData.append("director", director);
      formData.append("releseDate", releseDate);
      formData.append("tags", TagsSet);
      formData.append("genres", GenresSet);
      formData.append("trailer", trailer);
      formData.append("video", video);
      formData.append("imbRating", imbRating);
      formData.append("language", LanuageSet);
      formData.append("cast", CastSet);
      AdminService.addMovies(formData).then((res: any) => {
        setLoading(true);
        if (res?.status === "Fail") {
          toast.error(res.message);
          setLoading(false);
        } else {
          if (res) {
            toast.success(res?.message);
            navigate("/dashboard/movies");
            setLoading(false);
          }
        }
      });
  
    };

  return (
    <div className="container-fluid mb-5">
      <h3 className="text-start my-2">Create Movies</h3>
      <div className="row">
        <div className="col-6">
          <LabelBox name="Title" />
          <InputTextBox name="Title" 
              onChange={(e: any) => setTitle(e.target.value)}
              value={title}
              type="text"
          />
        </div>
        <div className="col-6">
          <LabelBox name="StoryLine" />
          <InputTextBox name="StoryLine" 
            onChange={(e: any) => setStoryLine(e.target.value)}
            value={storyLine}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Director" />
          <InputTextBox name="Director" 
            onChange={(e: any) => setDirector(e.target.value)}
            value={director}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Type" />
          <InputTextBox name="Type" 
            onChange={(e: any) => setType(e.target.value)}
            value={type}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="ReleseDate" />
          <InputTextBox name="ReleseDate" 
            onChange={(e: any) => setReleseDate(e.target.value)}
            value={releseDate}
            type="date"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Genres" />
          <InputTextBox name="Genres" 
            onChange={(e: any) => setGenres(e.target.value)}
            value={genres}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Tags" />
          <InputTextBox name="Tags" 
            onChange={(e: any) => setTags(e.target.value)}
            value={tags}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Cast" />
          <InputTextBox name="Cast" 
            onChange={(e: any) => setCast(e.target.value)}
            value={cast}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Poster" />
          <InputTextBox name="Poster" 
            onChange={(e:any) => handlePoster(e)}
            type="file"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Trailer" />
          <InputTextBox name="Trailer" 
            onChange={(e: any) => setTrailer(e.target.value)}
            value={trailer}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Video" />
          <InputTextBox name="Video" 
            onChange={(e: any) => setVideo(e.target.value)}
            value={video}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="ImbRating" />
          <InputTextBox name="ImbRating" 
            onChange={(e: any) => setImbRating(e.target.value)}
            value={imbRating}
            type="text"
          />
        </div>
        <div className="col-6 mt-3">
          <LabelBox name="Language" />
          <InputTextBox name="Language"
            onChange={(e: any) => setLanguage(e.target.value)}
            value={language}
            type="text"
          />
        </div>
        <div className="d-flex justify-content-start mt-4">
          <button
            className="custom-bg-btn rounded border-0 px-4 text-white py-1 me-2"
            onClick={(e) => handleMovies(e)}
          >
            Submit
          </button>
          <button className="custom-cancel-btn rounded border-0 px-4 py-1" onClick={()=>handleCancelButton()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
