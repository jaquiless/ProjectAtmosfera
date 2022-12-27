package springjdbcdemosections.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import springjdbcdemosections.model.Media;

@Repository
public class MediaDAOImpl implements MediaDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public int save(Media media) {
	// TODO Auto-generated method stub
	return jdbcTemplate.update("INSERT INTO projectbbdd.medias(description, urls, Types_id) VALUES (?, ?, ?)", new Object[] {media.getDescription(), media.getUrls(), media.getTypes_id()});
	}

	@Override
	public int update(Media media, int id) {
	// TODO Auto-generated method stub
	return jdbcTemplate.update("UPDATE projectbbdd.medias SET description=?, urls=?, Types_id WHERE id=?", new Object[] {media.getDescription(), media.getUrls(), media.getTypes_id(), id});
	}

	@Override
	public int delete(int id) {
	// TODO Auto-generated method stub
	return jdbcTemplate.update("DELETE FROM projectbbdd.medias WHERE id=?", id);
	}

	@Override
	public List<Media> getAll() {
	// TODO Auto-generated method stub
	return jdbcTemplate.query("SELECT * FROM projectbbdd.medias", new BeanPropertyRowMapper<Media>(Media.class));
	}

	@Override
	public Media getById(int id) {
	// TODO Auto-generated method stub
	return jdbcTemplate.queryForObject("SELECT * FROM projectbbdd.medias WHERE id=?", new BeanPropertyRowMapper<Media>(Media.class), id);
	}

}
