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


import springjdbcdemosections.DAO.TypeDAO;
import springjdbcdemosections.model.Type;

@RestController
public class TypeController {

	@Autowired
	private TypeDAO tDAO;
	
	@GetMapping("/types")
	public List<Type> getType(){
		return tDAO.getAll();
	}
	
	@GetMapping("/types/{id}")
	public Type getTypeById(@PathVariable int id){
		return tDAO.getById(id);
	}
	
	@PostMapping("/types")
	public String saveType(@RequestBody Type type) {
		return tDAO.save(type) + " Se ha Guardado to the database"; 
	}
	
	@PutMapping("/types/{id}")
	public String updateSection(@RequestBody Type type, @PathVariable int id) {
		return tDAO.update(type, id) + " Se ha Actualizado to the database";
	}

	@DeleteMapping("/types/{id}")
	public String deleteTypeById(@PathVariable int id) {
		return tDAO.delete(id) + " Se ha Cancelado to the database";
	}
}
