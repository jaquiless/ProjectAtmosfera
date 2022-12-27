package springjdbcdemosections.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import springjdbcdemosections.model.Sections_has_medias;

@Repository
public class Sections_has_mediasDAOImpl implements Sections_has_mediasDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Sections_has_medias sections_has_medias) {
		return jdbcTemplate.update("INSERT INTO projectbbdd.sections_has_medias (Sections_id, Medias_Id) VALUES (?, ?)", new Object[] {sections_has_medias.getSections_id(), sections_has_medias.getMedias_Id()});
		
	}
	@Override
	public int update(Sections_has_medias sections_has_medias, int id) {
		return jdbcTemplate.update("UPDATE projectbbdd.sections_has_medias SET Sections_id=?, Medias_Id=? WHERE id=?", new Object[] {sections_has_medias.getSections_id(), sections_has_medias.getMedias_Id(), id});
	}

	@Override
	public int delete(int id) {
		return jdbcTemplate.update("DELETE FROM projectbbdd.sections_has_medias WHERE id=?", id);
	}

	@Override
	//Employee (model)
	public List<Sections_has_medias> getAll() {
		return jdbcTemplate.query("SELECT * FROM projectbbdd.sections_has_medias", new BeanPropertyRowMapper<Sections_has_medias>(Sections_has_medias.class));
	}

	@Override
	public Sections_has_medias getById(int id) {
		return jdbcTemplate.queryForObject("SELECT * FROM projectbbdd.sections_has_medias WHERE id=?", new BeanPropertyRowMapper<Sections_has_medias>(Sections_has_medias.class), id);
	}

}
