import { useState, useEffect } from 'react';

export const useNetlifyProjects = () => {
  const [netlifyProjects, setNetlifyProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // This would require Netlify API integration
  // For now, we'll simulate the data structure
  useEffect(() => {
    const fetchNetlifyProjects = async () => {
      setLoading(true);
      try {
        // Simulated Netlify API response
        // In a real implementation, you would:
        // 1. Set up Netlify API access token
        // 2. Make API calls to https://api.netlify.com/api/v1/sites
        // 3. Filter for your sites
        
        const mockNetlifyData = [
          {
            id: '1',
            name: 'chris-steffen-ttt-weekend',
            url: 'https://chris-steffen-ttt-weekend.netlify.app/',
            screenshot: 'https://i.imgur.com/USSBjvH.png',
            updated_at: '2024-01-15T10:30:00Z',
            build_settings: {
              repo_url: 'https://github.com/chrsteffen1/ttt-weekend'
            },
            published_deploy: {
              state: 'ready',
              created_at: '2024-01-15T10:30:00Z'
            }
          },
          {
            id: '2',
            name: 'classic-snake-game-ga',
            url: 'https://classic-snake-game-ga.netlify.app/',
            screenshot: 'https://i.imgur.com/5AAxLIa.png',
            updated_at: '2024-01-10T14:20:00Z',
            build_settings: {
              repo_url: 'https://github.com/chrsteffen1/Snake-Game'
            },
            published_deploy: {
              state: 'ready',
              created_at: '2024-01-10T14:20:00Z'
            }
          }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setNetlifyProjects(mockNetlifyData);
      } catch (err) {
        setError('Failed to fetch Netlify projects');
        console.error('Netlify API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNetlifyProjects();
  }, []);

  return { netlifyProjects, loading, error };
};

// Helper function to integrate Netlify projects with existing projects
export const mergeWithNetlifyData = (staticProjects, netlifyProjects) => {
  return staticProjects.map(project => {
    const netlifyProject = netlifyProjects.find(np => 
      project.deploymentLink.includes(np.name) || 
      project.repositoryLink.includes(np.build_settings?.repo_url?.split('/').pop()?.replace('.git', ''))
    );

    if (netlifyProject) {
      return {
        ...project,
        netlifyData: {
          deploymentStatus: netlifyProject.published_deploy?.state || 'unknown',
          lastDeployed: netlifyProject.published_deploy?.created_at,
          lastUpdated: netlifyProject.updated_at,
          netlifyUrl: netlifyProject.url,
          deploymentId: netlifyProject.id
        }
      };
    }

    return project;
  });
};