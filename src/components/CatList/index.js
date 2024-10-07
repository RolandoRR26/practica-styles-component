import useFetchCats from "../../hooks/useFetchCats";
import { AppButton, DivButton, DescriptionP, Images, CatsArticle } from "./styles";
//import "../../styles/catList/style-catList.css";

const CatList = () => {
    const { cats, error, handleRefresh } = useFetchCats(); // llamamos al hook que hicimos (revisar bien)

    const renderCats = () => {
        // checamos si cats tiene un valor antes de usar el map 
        if (!cats) {
            return <p>Cargando...</p>;
        }

        return (
            <section>
                {cats.map((cat) => {
                    const { id, url, breeds } = cat;

                    //aqui buscamos si no tiene raza y damos un texto para que el alt no quede sin nada
                    const altText = breeds && breeds.length > 0 ? breeds[0].name : 'Gato';

                    return (
                        <CatsArticle key={id}>
                            <Images className="cats-images" src={url} alt={altText} /> {/*texto alternativo por defecto por si no tiene raza*/}
                            <DescriptionP>{breeds.length > 0 ? breeds[0].name : 'Sin información de raza'}</DescriptionP>
                        </CatsArticle>
                    );
                })}
                
                <DivButton>
                    <AppButton onClick={handleRefresh}>Siguiente Gatito</AppButton>
                </DivButton>
            </section>
        );
    };

    return (
        <>
            {error ? <p>Error al cargar los gatos</p> : renderCats()}
        </>
    );
}

export default CatList;
