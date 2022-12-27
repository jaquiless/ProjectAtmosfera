package springjdbcdemosections.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import springjdbcdemosections.DAO.MediaDAO;
import springjdbcdemosections.DAO.SectionDAO;
import springjdbcdemosections.DAO.Sections_has_mediasDAO;
import springjdbcdemosections.model.Media;
import springjdbcdemosections.model.Section;
import springjdbcdemosections.model.SectionMediaDTO;
import springjdbcdemosections.model.Sections_has_medias;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
public class SectionController {

	@Autowired
	private SectionDAO sDAO;
	
	@Autowired
	private MediaDAO mDAO;
	
	@Autowired
	private Sections_has_mediasDAO shmDAO;
	
	@GetMapping("/sections")
	public List<Section> getSection(){
		return sDAO.getAll();
	}
	
	@GetMapping("/sections/{id}")
	public Section getSectionById(@PathVariable int id){
		return sDAO.getById(id);
	}
	
	// Return DTO with an elements into a section
	@GetMapping("/section/{descriptionID}/media")
	public SectionMediaDTO getSectionDTO(@PathVariable int descriptionID){
		// DTO que vamos a construir que nos retornará el JSON
		SectionMediaDTO sectionMediaDTO = new SectionMediaDTO();
//		System.out.println(sectionDescription);
		// Creamos una sección
		Section section = null;
		// Cuando la section NO sea 0 quiero que me traigas toda la info de dicha section
		if(descriptionID != 0) {
			//Trae toda la info del id de dicha section
			section = sDAO.getById(descriptionID);
//			System.out.println(section.getDescription());
		}
		// Voy a la tabla intermedia para buscar las relaciones
		List<Sections_has_medias> listSHM = shmDAO.getAll();
//		System.out.println(" * " + listSHM);
		List<Media> returnedListMedia = new ArrayList<Media>();
		for (Sections_has_medias sections_has_medias : listSHM) {
			// Guarda solamente los elementos que tienen la section que le hemos pasado en el @PathVariable
			if(sections_has_medias.getSections_id() == descriptionID) {
//				System.out.println(sections_has_medias.getId());
				// Vamos llamando a la capa de repositorio y guardando dicho elemento en la lista
				returnedListMedia.add(mDAO.getById(sections_has_medias.getMedias_Id()));
			}
		}
//		System.out.println("Is empty: " + listMedia.isEmpty());
//		System.out.println("Size: " + listMedia.size());
		sectionMediaDTO.setSectionName(section.getDescription()); // Nombre de la categoria en el DTO
		sectionMediaDTO.setMedia(returnedListMedia); //Arraylist que contiene los media de la categoría filtrados previamente en returnedListMedia
		return sectionMediaDTO;
	}
	
	@PostMapping("/sections")
	public String saveSection(@RequestBody Section section) {
		return sDAO.save(section) + " Se ha Guardado to the database"; 
	}
	
	@PutMapping("/sections/{id}")
	public String updateSection(@RequestBody Section section, @PathVariable int id) {
		return sDAO.update(section, id) + " Se ha Actualizado to the database";
	}

	@DeleteMapping("/sections/{id}")
	public String deleteSectionById(@PathVariable int id) {
		return sDAO.delete(id) + " Se ha Cancelado to the database";
	}
}
