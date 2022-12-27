package springjdbcdemosections.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import springjdbcdemosections.model.Section;

@Repository
public class SectionDAOImpl implements SectionDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Section section) {
		return jdbcTemplate.update("INSERT INTO projectbbdd.sections(name, description) VALUES (?, ?)", new Object[] {section.getName(), section.getDescription()});
		
	}
	@Override
	public int update(Section section, int id) {
		return jdbcTemplate.update("UPDATE projectbbdd.sections SET name=?, description=? WHERE id=?", new Object[] {section.getName(), section.getDescription(), id});
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM projectbbdd.sections WHERE id=?", id);
	}

	@Override
	//Employee (model)
	public List<Section> getAll() {
		return jdbcTemplate.query("SELECT * FROM projectbbdd.sections", new BeanPropertyRowMapper<Section>(Section.class));
	}

	@Override
	public Section getById(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM projectbbdd.sections WHERE id=?", new BeanPropertyRowMapper<Section>(Section.class), id);
	}

}
