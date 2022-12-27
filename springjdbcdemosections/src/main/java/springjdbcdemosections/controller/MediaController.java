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

import springjdbcdemosections.DAO.MediaDAO;
import springjdbcdemosections.model.Media;

@RestController
public class MediaController {

	@Autowired
	private MediaDAO mDAO;

	@GetMapping("/medias")
	public List<Media> getMedias(){
	return mDAO.getAll();
	}

	@GetMapping("/medias/{id}")
	public Media getMediaById(@PathVariable int id){
	return mDAO.getById(id);
	}

	@PostMapping("/medias")
	public String saveMedia(@RequestBody Media media) {
		mDAO.save(media);
	return " Se ha Guardado to the database";
	}

	@PutMapping("/medias/{id}")
	public String updateMedia(@RequestBody Media media, @PathVariable int id) {
	return mDAO.update(media, id) + " Se ha Actualizado to the database";
	}

	@DeleteMapping("/medias/{id}")
	public String deleteMediaById(@PathVariable int id) {
	return mDAO.delete(id) + " Se ha Cancelado to the database";
	}
	
}
