package springjdbcdemosections.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class SectionMediaController {
//	
//	@Autowired
//	private MediaDAO mDAO;
//	
//	@Autowired
//	private SectionDAO sDAO;
//	
//	@GetMapping("/sectionmedia")
//	public SectionMedia sectionMedia() {
//		SectionMedia sectionMedia = new SectionMedia();
//	
//		List<Media> listMedia = mDAO.getAll();
////		System.out.println("Is empty: " + listMedia.isEmpty());
////		System.out.println("Size: " + listMedia.size());
////		System.out.println(listMedia.toString());
//		List<Media> returnedListMedia = new ArrayList<Media>();
//		for (Media media : listMedia) {
//			if(media.getTypes_id() == 1) {
//				returnedListMedia.add(media);
//			}
//		}
//		sectionMedia.setSectionName("Jean");
//		sectionMedia.setMedia(listMedia);
//		return sectionMedia;
//	}
}
