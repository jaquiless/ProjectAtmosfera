package springjdbcdemosections.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import springjdbcdemosections.model.Type;

@Repository
public class TypeDAOImpl implements TypeDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Type type) {
		return jdbcTemplate.update("INSERT INTO projectbbdd.types (element) VALUES (?, ?)", new Object[] {type.getElement()});
		
	}
	@Override
	public int update(Type type, int id) {
		return jdbcTemplate.update("UPDATE projectbbdd.types SET element=? WHERE id=?", new Object[] {type.getElement(), id});
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM projectbbdd.types WHERE id=?", id);
	}

	@Override
	//Employee (model)
	public List<Type> getAll() {
		return jdbcTemplate.query("SELECT * FROM projectbbdd.types", new BeanPropertyRowMapper<Type>(Type.class));
	}

	@Override
	public Type getById(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM projectbbdd.types WHERE id=?", new BeanPropertyRowMapper<Type>(Type.class), id);
	}



}
