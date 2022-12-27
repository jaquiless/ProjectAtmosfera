package springjdbcdemosections.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import springjdbcdemosections.DAO.Sections_has_mediasDAO;
import springjdbcdemosections.model.Sections_has_medias;
@RestController
public class Sections_has_mediasController {

		@Autowired
		private Sections_has_mediasDAO shmDAO;
		
		@GetMapping("/sections_has_medias")
		public List<Sections_has_medias> getSections_has_medias(){
			return shmDAO.getAll();
		}
		
		@GetMapping("/sections_has_medias/{id}")
		public Sections_has_medias getSections_has_mediasById(@PathVariable int id){
			return shmDAO.getById(id);
		}
		
		@PostMapping("/sections_has_medias")
		public String saveSections_has_medias(@RequestBody Sections_has_medias sections_has_medias) {
			return shmDAO.save(sections_has_medias) + " Se ha Guardado to the database"; 
		}
		
		@PutMapping("/sections_has_medias/{id}")
		public String updateSection(@RequestBody Sections_has_medias sections_has_medias, @PathVariable int id) {
			return shmDAO.update(sections_has_medias, id) + " Se ha Actualizado to the database";
		}

		@DeleteMapping("/sections_has_medias/{id}")
		public String deleteSections_has_mediasById(@PathVariable int id) {
			return shmDAO.delete(id) + " Se ha Cancelado to the database";
		}
}
